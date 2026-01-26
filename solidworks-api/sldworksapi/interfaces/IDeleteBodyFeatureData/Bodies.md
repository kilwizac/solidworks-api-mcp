---
type: property
interface: IDeleteBodyFeatureData
member: Bodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteBodyFeatureData.GetBodiesCount
  - IDeleteBodyFeatureData.IGetBodies
  - IDeleteBodyFeatureData.ISetBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - delete
  - ideletebodyfeaturedata
  - body
  - feature
  - data
  - object
readonly: null
---

# IDeleteBodyFeatureData.Bodies

Gets or sets the bodies to delete or keep.

## Signature

```csharp
System.Object Bodies {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies to delete or keep

## Remarks

Call
IDeleteBodyFeatureData::KeepBodies
to specify whether to keep or delete the bodies.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IDeleteBodyFeatureData.GetBodiesCount`
- `IDeleteBodyFeatureData.IGetBodies`
- `IDeleteBodyFeatureData.ISetBodies`