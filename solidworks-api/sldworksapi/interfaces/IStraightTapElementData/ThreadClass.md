---
type: property
interface: IStraightTapElementData
member: ThreadClass
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - threadclass
  - istraighttapelementdata
  - straight
  - tap
  - element
  - data
  - thread
  - int32
readonly: null
---

# IStraightTapElementData.ThreadClass

Gets or sets the thread class for this straight tap hole element.

## Signature

```csharp
System.Int32 ThreadClass {get; set;}
```
## Parameters

None.

## Return Value

Thread class as defined in swStraightTapHoleThreadClass_e

## Remarks

This property is valid only if
IStraightTapElementData::ThreadClassOverride
is set to true.

## Examples

- IStraightTapElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStraightTapElementData)