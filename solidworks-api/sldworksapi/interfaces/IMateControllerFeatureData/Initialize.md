---
type: method
interface: IMateControllerFeatureData
member: Initialize
returns: void
parameters:
  -
    name: Mates
    type: System.Object
    description: Array of supportive mates
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - initialize
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - mates
  - object
  - void
---

# IMateControllerFeatureData.Initialize

Initializes this mate controller with the specified mates.

## Signature

```csharp
void Initialize( 
   System.Object
Mates
)
```
## Parameters

- `Mates` (System.Object): Array of supportive mates

## Return Value

Unknown.

## Remarks

Before calling this method, use
IAssemblyDoc::IsSupportedMatesAvailable
and
IAssemblyDoc::CollectAllSupportiveMates
to determine appropriates mates with which to initialize this mate controller.
Mates passed to this method are given precedence over pre-selected mates. If this method is not called or invalid mates are passed to it, then pre-selected mates are used.
For .NET applications, you must marshal the Mates array to IDispatch object arrays before calling this method. See
IDispatch Object Arrays as Input in .NET
.

## Examples

- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)