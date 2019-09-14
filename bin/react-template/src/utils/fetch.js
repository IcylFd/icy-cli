import 'whatwg-fetch';
import 'fetch-detector';
import 'fetch-ie8';

class Fetch {
  _safeMap(arr, iterator) {
    if (Array.isArray(arr)) {
      return arr.map(iterator);
    } else if (typeof arr === 'object') {
      return Object.keys(arr).map((key) => iterator(arr[key], key));
    }

    return [];
  }

  _parseJSON(response) {
    if (response.headers.get('Content-Type').indexOf('text/plain') !== -1) {
      return response.text();
    }
    return response.json();
  }

  _checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`调取服务发生错误:错误码:${response.status},错误信息:${response.statusText}`);
    throw error;
  }

  _handleError(response) {
    let resData = response;
    if (Object.prototype.toString.call(resData) === '[object String]') {
      resData = JSON.parse(response);
    }
    if (+resData.errno !== 0 && resData.code !== 0) {
      // 接口异常错误
      throw resData.errmsg || resData.message;
    }
    return resData.data;
  }

  getJSON(resource) {
    const headers = new Headers({
      customdata: resource.headers && JSON.stringify(resource.headers),
    });
    const URL = `${resource.url}?${this._safeMap(resource.params, (item, key) => `${key}=${item}`).join('&')}`;
    return fetch(URL, { credentials: 'include', headers })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  // 报错时返回全部data
  getJSON1(resource) {
    const headers = new Headers({
      customdata: resource.headers && JSON.stringify(resource.headers),
    });
    const URL = `${resource.url}?${this._safeMap(resource.params, (item, key) => `${key}=${item}`).join('&')}`;
    return fetch(URL, { credentials: 'include', headers })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError1);
  }

  _handleError1(response) {
    let resData = response;
    if (Object.prototype.toString.call(resData) === '[object String]') {
      resData = JSON.parse(response);
    }

    return resData;
  }

  delete(resource) {
    const URL = `${resource.url}`;
    return fetch(URL, { method: 'delete', credentials: 'include' })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  get(resource) {
    const URL = `${resource.url}/${resource.params[Object.keys(resource.params)[0]]}`;
    return fetch(URL, { credentials: 'include' })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  postJSON(resource) {
    return fetch(resource.url, {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resource.params),
    })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  postFile(resource) {
    return fetch(resource.url, {
      method: 'post',
      ContentType: false,
      mimeType: 'multipart/form-data',
      body: resource.params,
    })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  putJSON(resource) {
    return fetch(resource.url, {
      method: 'put',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resource.params),
    })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }

  patchJSON(resource) {
    return fetch(resource.url, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resource.params),
    })
      .then(this._checkHttpStatus)
      .then(this._parseJSON)
      .then(this._handleError);
  }
}

export default new Fetch();
