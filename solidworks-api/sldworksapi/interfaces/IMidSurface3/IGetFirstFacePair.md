---
type: method
interface: IMidSurface3
member: IGetFirstFacePair
returns: Face2
parameters:
  -
    name: Thickness
    type: System.Double
    description: Distance between these two parallel faces
  -
    name: PartnerFaceDisp
    type: Face2
    description: Face on the original part body used in generating the neutral face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFacePairCount
  - IMidSurface3.GetFirstFacePair
  - IMidSurface3.GetNextFacePair
keywords:
  - igetfirstfacepair
  - imidsurface3
  - mid
  - surface3
  - first
  - face
  - pair
  - thickness
  - double
  - partner
  - disp
  - face2
---

# IMidSurface3.IGetFirstFacePair

Gets the first pair of parallel faces in this midsurface feature and the thickness (in meters) between the two faces.

## Signature

```csharp
Face2 IGetFirstFacePair( 
   out System.Double
Thickness
,
   out Face2
PartnerFaceDisp
)
```
## Parameters

- `Thickness` (System.Double): Distance between these two parallel faces
- `PartnerFaceDisp` (Face2): Face on the original part body used in generating the neutral face

## Return Value

Face on the original part body used in generating the neutral face

## Remarks

The two faces returned by this method are the two parallel faces from the original part body that were used to generate the first neutral face in this midsurface feature.
This method is similar to
IMidSurface3::IGetFirstFace
, except this method does not return the neutral face.
Call
IMidSurface3::IGetNextFacePair
to get the next pair of faces in this midsurface feature.

## See Also

- `IMidSurface3.GetFacePairCount`
- `IMidSurface3.GetFirstFacePair`
- `IMidSurface3.GetNextFacePair`