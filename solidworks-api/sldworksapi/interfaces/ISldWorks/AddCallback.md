---
type: method
interface: ISldWorks
member: AddCallback
returns: void
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie specified in ISwAddin::ConnectToSW
  -
    name: CallbackFunction
    type: System.String
    description: Name of the function to call (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.CallBack
  - ISldWorks.PostMessageToApplication
  - ISldWorks.RemoveCallback
  - ISldWorks.SetAddinCallbackInfo
keywords:
  - callback
  - addcallback
  - isldworks
  - sld
  - works
  - add
  - cookie
  - int32
  - function
  - string
  - void
---

# ISldWorks.AddCallback

Registers a general purpose callback handler.

## Signature

```csharp
void AddCallback( 
   System.Int32
Cookie
,
   System.String
CallbackFunction
)
```
## Parameters

- `Cookie` (System.Int32): Cookie specified in ISwAddin::ConnectToSW
- `CallbackFunction` (System.String): Name of the function to call (see Remarks )

## Return Value

Unknown.

## Remarks

The callback function has three arguments:
Callback function parameter name in example
Data Type
Description
cmd
Integer
Command ID as defined in
swAppCallBackCmd_e
data
Integer
Data related to the event
dsp
LPDISPATCH
Not currently used

## See Also

- `ISldWorks.CallBack`
- `ISldWorks.PostMessageToApplication`
- `ISldWorks.RemoveCallback`
- `ISldWorks.SetAddinCallbackInfo`