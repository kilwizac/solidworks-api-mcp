---
type: method
interface: ISldWorks
member: RemoveCallback
returns: void
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Cookie of callback function to unregister
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddCallback
  - ISldWorks.CallBack
  - ISldWorks.SetAddinCallbackInfo
keywords:
  - callback
  - removecallback
  - isldworks
  - sld
  - works
  - remove
  - cookie
  - int32
  - void
---

# ISldWorks.RemoveCallback

Unregisters a general purpose callback handler.

## Signature

```csharp
void RemoveCallback( 
   System.Int32
Cookie
)
```
## Parameters

- `Cookie` (System.Int32): Cookie of callback function to unregister

## Return Value

Unknown.

## See Also

- `ISldWorks.AddCallback`
- `ISldWorks.CallBack`
- `ISldWorks.SetAddinCallbackInfo`