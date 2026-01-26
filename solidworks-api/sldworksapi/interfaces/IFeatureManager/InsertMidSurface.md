---
type: method
interface: IFeatureManager
member: InsertMidSurface
returns: System.Object
parameters:
  -
    name: PBodyIn
    type: Body2
    description: Body in the context of an assembly; otherwise, null or Nothing (see Remarks )
  -
    name: PPartDocIn
    type: ModelDoc2
    description: Model document in the context of an assembly; otherwise, null or Nothing (see Remarks )
  -
    name: Placement
    type: System.Double
    description: Value from -1 to 1 that indicates the desired location of the midsurface relative to the face pair; a value of 0.0 places the midsurface equally between the face pair
  -
    name: KnitFlag
    type: System.Boolean
    description: True to sew all the reference surfaces (neutral sheets) into a single sheet (surface) body, false for the midsurface feature to contain individual reference surface geometry
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - midsurface
  - insertmidsurface
  - ifeaturemanager
  - manager
  - insert
  - mid
  - surface
  - body
  - body2
  - part
  - doc
  - model
  - doc2
  - placement
  - double
  - knit
  - flag
  - boolean
  - object
  - component
  - vb
  - net
  - vba
  - areas
  - faces
---

# IFeatureManager.InsertMidSurface

Inserts a midsurface feature.

## Signature

```csharp
System.Object InsertMidSurface( 
   Body2
PBodyIn
,
   ModelDoc2
PPartDocIn
,
   System.Double
Placement
,
   System.Boolean
KnitFlag
)
```
## Parameters

- `PBodyIn` (Body2): Body in the context of an assembly; otherwise, null or Nothing (see Remarks )
- `PPartDocIn` (ModelDoc2): Model document in the context of an assembly; otherwise, null or Nothing (see Remarks )
- `Placement` (System.Double): Value from -1 to 1 that indicates the desired location of the midsurface relative to the face pair; a value of 0.0 places the midsurface equally between the face pair
- `KnitFlag` (System.Boolean): True to sew all the reference surfaces (neutral sheets) into a single sheet (surface) body, false for the midsurface feature to contain individual reference surface geometry

## Return Value

Newly created midsurface feature

## Remarks

The pPartDocIn parameter is the component's model document where you want to add the midsurface feature, and the pBody parameter is the body of that component.
A midsurface feature is calculated from the solid body in your part document. This method first finds all parallel pairs of faces from the part solid. For each pair of parallel faces found, it creates a neutral reference surface between the two faces. The placement position of the reference surface is controlled by the placement parameter. This process repeats itself until all parallel body faces are processed. At the end of this process, all the reference surfaces are sewn into a single reference surface if knitFlag is set to true.
The hierarchy of a midsurface feature is a midsurface feature contains one or more reference surfaces. If sewn successfully using the KnitFlag = True option, then the midsurface feature contains only one reference surface. Each reference surface is considered a sheet body. The sheet body has the normal topology that you would expect to find on a body object (for example, faces, edges, and so on). See
IMidSurface3
for methods that provide access to this topology.

## Examples

- Insert MidSurface in Component (C#) (Insert_MidSurface_in_Component_Example_CSharp.htm)
- Insert MidSurface in Component (VB.NET) (Insert_MidSurface_in_Component_Example_VBNET.htm)
- Insert MidSurface in Component (VBA) (Insert_MidSurface_in_Component_Example_VB.htm)
- Get Areas of Midsurface Faces (C#) (Get_Areas_of_MidSurface_Faces_Example_CSharp.htm)
- Get Areas of Midsurface Faces (VB.NET) (Get_Areas_of_MidSurface_FAces_Example_VBNET.htm)
- Get Areas of Midsurface Faces (VBA) (Get_Areas_of_MidSurface_Faces_Example_VB.htm)