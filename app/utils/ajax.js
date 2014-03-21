/* global ic */
function ajax(){
  return ic.ajax.apply(null, arguments);
}

export default ajax;

export function ghAjax(resource, data, options) {
  var url = ['https://api.github.com'];
  var type = 'get';

  options = options || {};

  if(options.owner && options.repo) {
    url.push('repos');
    url.push(options.owner);
    url.push(options.repo);
  }

  url.push(resource);

  if(options.id) {
    url.push(options.id);
  }

  if(options.type) {
    type = options.type;
  }

  if(data && options.id) {
    type = 'patch';
  } else if(data) {
    type = 'post';
  }

  var ajaxOptions = {
    url: url.join('/'),
    type: type,
    data: JSON.stringify(data)
  };

  return ajax(ajaxOptions);
};
