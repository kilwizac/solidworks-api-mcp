---
type: method
interface: ISldWorks
member: CallBack
returns: System.Int32
parameters:
  -
    name: CallBackFunc
    type: System.String
    description: Function to call
  -
    name: DefaultRetVal
    type: System.Int32
    description: Default return value
  -
    name: CallBackArgs
    type: System.String
    description: Arguments to pass to the callback function
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddCallback
  - ISldWorks.RemoveCallback
  - ISldWorks.SetAddinCallbackInfo
keywords:
  - callback
  - isldworks
  - sld
  - works
  - call
  - back
  - func
  - string
  - default
  - ret
  - val
  - int32
  - args
---

# ISldWorks.CallBack

Allows an out-of-process executable or a SOLIDWORKS macro to call back a function in a SOLIDWORKS add-in DLL.

## Signature

```csharp
System.Int32 CallBack( 
   System.String
CallBackFunc
,
   System.Int32
DefaultRetVal
,
   System.String
CallBackArgs
)
```
## Parameters

- `CallBackFunc` (System.String): Function to call
- `DefaultRetVal` (System.Int32): Default return value
- `CallBackArgs` (System.String): Arguments to pass to the callback function

## Return Value

Return value from the callback function, if it is called; DefaultRetVal if it is not called

## Remarks

The CallBackFunc value contains the callback function to call. The syntax is:
dllname@function
where:
dllname is the name of the add-in library as specified in your project .def file.
function is the name of the function that gets called by this method. It must be declared as an exportin your project .def file.
If the callback function is actually called, then the return value contains the value returned by the callback function, and the DefaultRetVal is not used.
If the callback function is not called, then the DefaultRetVal value is passed back from the API in the retval value. This allows the caller of this API to specify a return value that is different from any return value that the callback function might return so that it can tell if a problem occurred that caused the callback to never get called.
The CallBackArgs value contains the information to pass to the callback function. This value is untouched by the API and is passed through to the callback as a BSTR. Therefore, the format of what is inside of the string can be whatever the caller wants it to be. Handling and use of it is the sole responsibility of the callback function.

## See Also

- `ISldWorks.AddCallback`
- `ISldWorks.RemoveCallback`
- `ISldWorks.SetAddinCallbackInfo`