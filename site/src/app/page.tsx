export default function Home() {
  return (
    <main className="prose max-w-screen-xl">
      {/* <Image src={photoCity} alt="teste contec" className="" /> */}
      <h1 id="authentication">Soluções</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed
        deleniti repudiandae libero unde error voluptatem aliquam tempora facere
        a officia beatae sunt repellat suscipit iusto quia, vel temporibus at.
      </p>
      <h2 id="basic-authentication">Basic authentication</h2>
      <p>
        With basic authentication, you use your username and password to
        authenticate your HTTP requests. Unless you have a very good reason, you
        probably shouldn&#39;t use basic auth. Here&#39;s how to authenticate
        using cURL:
      </p>
      <pre>
        <code className="language-bash">
          curl https://api.protocol.chat/v1/conversations \ -u username:password
        </code>
      </pre>
      <p>Please don&#39;t commit your Protocol password to GitHub!</p>
      <h2 id="oauth2-with-bearer-token">OAuth2 with bearer token</h2>
      <p>
        The recommended way to authenticate with the Protocol API is by using
        OAuth2. When establishing a connection using OAuth2, you will need your
        access token — you will find it in the{' '}
        <a href="#">Protocol dashboard</a> under API settings. Here&#39;s how to
        add the token to the request header using cURL:
      </p>
      <pre>
        <code className="language-bash">
          curl https://api.protocol.chat/v1/conversations \ -H
          &quot;Authorization: Bearer token&quot;
        </code>
      </pre>
      <p>
        Always keep your token safe and reset it if you suspect it has been
        compromised.
      </p>
      <h2 id="using-an-sdk">Using an SDK</h2>
      <p>
        If you use one of our official SDKs, you won&#39;t have to worry about
        any of the above — fetch your access token from the{' '}
        <a href="#">Protocol dashboard</a> under API settings, and the client
        library will take care of the rest. All the client libraries use OAuth2
        behind the scenes.
      </p>
    </main>
  )
}
