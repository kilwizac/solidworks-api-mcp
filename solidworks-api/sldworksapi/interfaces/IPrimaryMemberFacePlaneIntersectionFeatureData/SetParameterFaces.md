---
type: method
interface: IPrimaryMemberFacePlaneIntersectionFeatureData
member: SetParameterFaces
returns: System.Boolean
parameters:
  -
    name: Faces
    type: System.Object
    description: Array of IFace2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - setparameterfaces
  - iprimarymemberfaceplaneintersectionfeaturedata
  - primary
  - member
  - face
  - plane
  - intersection
  - feature
  - data
  - parameter
  - faces
  - object
  - boolean
---

# IPrimaryMemberFacePlaneIntersectionFeatureData.SetParameterFaces

Sets the parameter faces of this structure system member.

## Signature

```csharp
System.Boolean SetParameterFaces( 
   System.Object
Faces
)
```
## Parameters

- `Faces` (System.Object): Array of IFace2 s

## Return Value

True if parameter faces successfully set, false if not

## Remarks

Only
swSelectType_e
.swSelFACES type entities can be set using this method.
At edit time you can set only one parameter face.

## Examples

- IPrimaryMemberFacePlaneIntersectionFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberFacePlaneIntersectionFeatureData)