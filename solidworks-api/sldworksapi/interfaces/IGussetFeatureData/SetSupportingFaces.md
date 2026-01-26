---
type: method
interface: IGussetFeatureData
member: SetSupportingFaces
returns: System.Boolean
parameters:
  -
    name: PFace1
    type: Face2
    description: Pointer to the first IFace2 object
  -
    name: PFace2
    type: Face2
    description: Pointer to the second IFace2 object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IGussetFeatureData.GetSupportingFaces
keywords:
  - setsupportingfaces
  - igussetfeaturedata
  - gusset
  - feature
  - data
  - supporting
  - faces
  - face1
  - face2
  - boolean
---

# IGussetFeatureData.SetSupportingFaces

Sets the two, adjacent, supporting faces for this gusset feature.

## Signature

```csharp
System.Boolean SetSupportingFaces( 
   Face2
PFace1
,
   Face2
PFace2
)
```
## Parameters

- `PFace1` (Face2): Pointer to the first IFace2 object
- `PFace2` (Face2): Pointer to the second IFace2 object

## Return Value

True if the supporting faces are set, false if not

## See Also

- `IGussetFeatureData.GetSupportingFaces`