---
type: property
interface: ISlicingData
member: Offset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - offset
  - islicingdata
  - slicing
  - data
  - double
readonly: null
---

# ISlicingData.Offset

Gets or sets the linear or radial spacing between slicing planes.

## Signature

```csharp
System.Double Offset {get; set;}
```
## Parameters

None.

## Return Value

Linear spacing (meters) or radial spacing (radians) between slicing planes (see Remarks )

## Remarks

If
ISlicingData::PlaneReferences
specifies:
a planar entity, then this property specifies linear spacing between slices.
a linear entity and a point entity, then this property specifies radial spacing between slices.

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)