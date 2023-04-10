const endpoints = {"engines": {"list": {"endpoint": "https://api.openai.com/v1/engines", "type": "GET"}, "retrieve": {"endpoint": "https://api.openai.com/v1/engines/{engine_id}", "type": "GET", "var": "{engine_id}"}}, "models": {"list": {"endpoint": "https://api.openai.com/v1/models", "type": "GET"}, "retrieve": {"endpoint": "https://api.openai.com/v1/models/{model}", "type": "GET", "var": "{model}"}}, "moderation": {"create": "https://api.openai.com/v1/moderations", "type": "POST"}, "fine-tunes": {"create": {"endpoint": "https://api.openai.com/v1/fine-tunes", "type": "POST"}, "list": {"endpoint": "https://api.openai.com/v1/fine-tunes/{fine_tune_id}/events", "type": "GET", "var": "{fine_tune_id}"}, "retrieve": {"endpoint": "https://api.openai.com/v1/fine-tunes/{fine_tune_id}", "type": "GET", "var": "{fine_tune_id}"}, "cancel": {"endpoint": "https://api.openai.com/v1/fine-tunes/{fine_tune_id}/cancel", "type": "POST", "var": "{fine_tune_id}"}, "delete": {"endpoint": "https://api.openai.com/v1/models/{model}", "type": "DELETE", "var": "{model}"}}, "completions": {"create": {"endpoint": "https://api.openai.com/v1/completions", "type": "POST"}}, "edit": {"create": {"endpoint": "https://api.openai.com/v1/edits", "type": "POST"}}, "files": {"list": {"endpoint": "https://api.openai.com/v1/files", "type": "GET"}, "upload": {"endpoint": "https://api.openai.com/v1/files", "type": "POST"}, "delete": {"endpoint": "https://api.openai.com/v1/files/{file_id}", "type": "DELETE", "var": "{file_id}"}, "retrieveFile": {"endpoint": "https://api.openai.com/v1/files/{file_id}", "type": "GET", "var": "{file_id}"}, "retrieveContent": {"endpoint": "https://api.openai.com/v1/files/{file_id}/content", "type": "GET", "var": "{file_id}"}}, "embeddings": {"create": {"endpoint": "https://api.openai.com/v1/embeddings", "type": "POST"}}, "image": {"create": {"endpoint": "https://api.openai.com/v1/images/generations", "type": "POST"}, "edit": {"endpoint": "https://api.openai.com/v1/images/edits", "type": "POST"}, "variation": {"endpoint": "https://api.openai.com/v1/images/variations", "type": "POST"}}}

function GetKeys() {
  var n = 0;
  return (
    <div>
  {endpoints.map(key => (
    <select key={key}>
      {this.state.data.map(({ [key]: value }) => <option key={value}>{value}</option>)}
    </select>
  ))}
</div>
  );
}
export default GetKeys();
