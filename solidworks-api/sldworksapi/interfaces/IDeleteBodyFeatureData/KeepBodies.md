---
type: property
interface: IDeleteBodyFeatureData
member: KeepBodies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - keepbodies
  - ideletebodyfeaturedata
  - delete
  - body
  - feature
  - data
  - keep
  - bodies
  - boolean
readonly: null
---

# IDeleteBodyFeatureData.KeepBodies

Gets or sets whether to keep bodies.

## Signature

```csharp
System.Boolean KeepBodies {get; set;}
```
## Parameters

None.

## Return Value

True to keep bodies, false to delete bodies

## Remarks

Call
IDeleteBodyFeatureData::Bodies
to specify the bodies to keep or delete.

## Examples

- IDeleteBodyFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDeleteBodyFeatureData)