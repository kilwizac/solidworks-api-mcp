---
type: method
interface: IModelDoc2
member: SetAddToDB
returns: void
parameters:
  -
    name: Setting
    type: System.Boolean
    description: True to add items directly to the SOLIDWORKS database, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetAddToDB
keywords:
  - setaddtodb
  - imodeldoc2
  - model
  - doc2
  - add
  - db
  - setting
  - boolean
  - void
  - tessellate
  - body
  - calculate
  - closest
  - distance
  - between
  - faces
  - vba
  - components
  - create
  - plane
  - thru
  - points
  - context
  - intersecting
  - face
  - edge
---

# IModelDoc2.SetAddToDB

Obsolete. Superseded by ISketchManager::AddToDB.

## Signature

```csharp
void SetAddToDB( 
   System.Boolean
Setting
)
```
## Parameters

- `Setting` (System.Boolean): True to add items directly to the SOLIDWORKS database, false if not

## Return Value

Unknown.

## Remarks

One of the benefits of adding sketch entities directly to the database is that you can avoid grid and entity snapping. For example, if you create a sketch line whose endpoint is near another entity or near a grid point, the new line endpoint snaps to the other item or grid point. Setting ModelDoc2::SetAddToDB to True avoids this behavior during sketch entity creation.
IModelDoc2::SetAddToDb and
IModelDoc2::SetDisplayWhenAdded
also increase performance during sketch entity creation. IModelDoc2::SetDisplayWhenAdded requires that IModelDoc2::SetAddToDB is True.
If you want to constrain all the sketch entities after creation, use
ISketch::ConstrainAll
.
After setting IModelDoc2::SetAddToDB to True, you must set it back to false to restore SOLIDWORKS to its normal operating mode.

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Calculate Closest Distance Between Faces (VBA) (Calculate_Closest_Distance_Between_Faces_Example_VB.htm)
- Calculate Closest Distance Between Model Components (VBA) (Calculate_Closest_Distance_Between_Model_Components_Example_VB.htm)
- Create Plane Thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Get Intersecting Face and Edge (VBA) (Get_Intersecting_Face_and_Edge_Example_VB.htm)
- Get Intersecting Faces (VBA) (Get_Intersecting_Faces_Example_VB.htm)

## See Also

- `IModelDoc2.GetAddToDB`