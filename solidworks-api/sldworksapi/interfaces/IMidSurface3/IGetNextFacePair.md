---
type: method
interface: IMidSurface3
member: IGetNextFacePair
returns: Face2
parameters:
  -
    name: Thickness
    type: System.Double
    description: Distance between theses two parallel faces
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
  - igetnextfacepair
  - imidsurface3
  - mid
  - surface3
  - next
  - face
  - pair
  - thickness
  - double
  - partner
  - disp
  - face2
---

# IMidSurface3.IGetNextFacePair

Gets the next pair of parallel faces in this midsurface feature and the thickness (in meters) between the two faces.

## Signature

```csharp
Face2 IGetNextFacePair( 
   out System.Double
Thickness
,
   out Face2
PartnerFaceDisp
)
```
## Parameters

- `Thickness` (System.Double): Distance between theses two parallel faces
- `PartnerFaceDisp` (Face2): Face on the original part body used in generating the neutral face

## Return Value

Face on the original part body used in generating the neutral face

## Remarks

The two faces returned are the two parallel faces from the original part body that were used to generate the neutral face in this midsurface feature.
Call
IMidSurface3::IGetFirstFacePair
to get the first pair of faces used in this midsurface feature.
This method is similar to
IMidSurface3::IGetNextFace
, except this method does not return the neutral face.

## See Also

- `IMidSurface3.GetFacePairCount`
- `IMidSurface3.GetFirstFacePair`
- `IMidSurface3.GetNextFacePair`