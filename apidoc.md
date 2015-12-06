# ZombieTransAPI

## GET API Docs
Returns the documentation for the zombie translator

### Resource URL

`http://localhost:7000/`

### Resource Information

Response format: HTML converted from Markdown

### Parameters

None

## GET zombify

Translates text into Zombie

### Resource URL

`http://localhost:7000/zombify`

### Resource Information

* Response format: JSON

### Parameters

* `src`: A string to be translated, up to 1,000 characters. If the string is greater than 1,000 characters, then a 414 error returned with `null` for the result.

### Example Valid Request

`http://localhost:7000/zombify?src=foobar`

### Example Valid Result
~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'frrrRrrrrRrbhraRR'
}
~~~

### Example Invalid Requests

#### Strings greater than 1,000 characters

The string `1001chrstring` represents any string that is greater than 1,000 characters

`http://localhost:7000/zombify?src=1001chrstring`

~~~
{
	'status' : 414,
	'message' : 'parameter is too long',
	'text' : null
}
~~~

#### Missing strings

Missing `src` values return a 200 but with the error in the `text` parameter.

`http://localhost:7000/zombify?src=`
`http://localhost:7000/zombify?src`

~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'No source text found'
}
~~~

## GET unzombify

Translates text into English

### Resource URL

`http://localhost:7000/unzombify`

### Resource Information

* Response format: JSON

### Parameters

* `src`: A string to be translated, up to 1,000 characters. If the string is greater than 1,000 characters, then a 414 error returned with `null` for the result.

### Example Valid Request

`http://localhost:7000/unzombify?src=frrrRrrrrRrbhraRR`

### Example Valid Result
~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'ferRubar'
}
~~~

### Example Invalid Requests

#### Strings greater than 1,000 characters

The string `1001chrstring` represents any string that is greater than 1,000 characters

`http://localhost:7000/unzombify?src=1001chrstring`

~~~
{
	'status' : 414,
	'message' : 'parameter is too long',
	'text' : null
}
~~~

#### Missing strings

Missing `src` values return a 200 but with the error in the `text` parameter.

`http://localhost:7000/unzombify?src=`
`http://localhost:7000/unzombify?src`

~~~
{
	'status' : 200,
	'message' : 'OK',
	'text' : 'No source text found'
}
~~~
