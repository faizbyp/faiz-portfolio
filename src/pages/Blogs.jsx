/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable import/no-extraneous-dependencies */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function Blog({ body }) {
  return (
    <div className="col-12 col-lg-6">
      <div className="card p-3 my-2">
        <ReactMarkdown children={body} />
      </div>
    </div>
  );
}

function Blogs() {
  const contents = [
    {
      id: 1,
      body: '# Numero Uno\nHello! This is Markdown in React',
    },
    {
      id: 2,
      body: '# Two Two Two\nBlog ini masih statis dan data diambil langsung dari array pada komponen',
    },
    {
      id: 3,
      body: '# Tilu\nHalo sobat',
    },
    {
      id: 4,
      body: '# IV\nJust another card',
    },
    {
      id: 5,
      body: '# Panca\nKartu terakhir pada array',
    },
  ];

  return (
    <div className="container">
      <div className="row text-center pt-5">
        <div className="col">
          <h1 className="display-2 text-primary">Blogs</h1>
          <p>Random writings of me</p>
        </div>
      </div>

      <div className="row">
        {contents.map((content) => (
          <Blog body={content.body} key={content.id} />
        ))}
      </div>
    </div>
  );
}
export default Blogs;
