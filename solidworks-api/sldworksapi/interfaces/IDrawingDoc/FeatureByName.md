---
type: method
interface: IDrawingDoc
member: FeatureByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - features
  - ui
related:
  - IDrawingDoc.IFeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - featurebyname
  - idrawingdoc
  - drawing
  - doc
  - string
  - object
  - create
  - planes
  - vba
  - table
  - anchor
  - hole
  - vb
  - net
---

# IDrawingDoc.FeatureByName

Gets the specified feature in the drawing.

## Signature

```csharp
System.Object FeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the feature

## Return Value

Feature

## Examples

- Create and Name Planes (VBA) (Create_and_Name_Plane_Example_VB.htm)
- Get and Set Table Anchor of Hole Table (C#) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_CSharp.htm)
- Get and Set Table Anchor of Hole Table (VB.NET) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VBNET.htm)
- Get and Set Table Anchor of Hole Table (VBA) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VB.htm)

## See Also

- `IDrawingDoc.IFeatureByName`