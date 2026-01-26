---
type: method
interface: IMidSurface2
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
deprecated: true
since_version: unknown
categories:
  - geometry
related:
  - IMidSurface2.GetFacePairCount
  - IMidSurface2.GetFirstFacePair
  - IMidSurface2.GetNextFacePair
keywords:
  - igetnextfacepair
  - imidsurface2
  - mid
  - surface2
  - next
  - face
  - pair
  - thickness
  - double
  - partner
  - disp
  - face2
---

# IMidSurface2.IGetNextFacePair

Obsolete. Superseded by IMidSurface3::IGetNextFacePair.

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
IMidSurface2::IGetFirstFacePair
to get the first pair of faces used in this midsurface feature.
This method is similar to
IMidSurface2::IGetNextFace
, except this method does not return the neutral face.

## See Also

- `IMidSurface2.GetFacePairCount`
- `IMidSurface2.GetFirstFacePair`
- `IMidSurface2.GetNextFacePair`