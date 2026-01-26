---
type: property
interface: ITaperedTapElementData
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
  - itaperedtapelementdata
  - tapered
  - tap
  - element
  - data
  - thread
  - int32
readonly: null
---

# ITaperedTapElementData.ThreadClass

Gets or sets the thread class for this tapered tap hole element.

## Signature

```csharp
System.Int32 ThreadClass {get; set;}
```
## Parameters

None.

## Return Value

Thread class as defined in swTaperedTapThreadClass_e

## Remarks

This property is valid only if
ITaperedTapElementData::ThreadClassOverride
is set to true.

## Examples

- ITaperedTapElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITaperedTapElementData)