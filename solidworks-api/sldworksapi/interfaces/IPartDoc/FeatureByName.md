---
type: method
interface: IPartDoc
member: FeatureByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - parts
  - ui
related:
  - IAssemblyDoc.FeatureByName
  - IAssemblyDoc.IFeatureByName
  - IComponent2.FeatureByName
  - IDrawingDoc.FeatureByName
  - IDrawingDoc.IFeatureByName
  - IPartDoc.FeatureById
  - IPartDoc.IFeatureById
  - IPartDoc.IFeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - featurebyname
  - ipartdoc
  - part
  - doc
  - string
  - object
  - autodimension
  - all
  - sketches
  - vba
  - constraint
  - dome
  - move
  - copy
  - sketch
  - entities
  - vb
  - net
  - roll
  - back
  - model
  - suppress
  - component
---

# IPartDoc.FeatureByName

Gets the named feature in the part.

## Signature

```csharp
System.Object FeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of feature

## Return Value

Feature

## Examples

- Autodimension All Sketches (VBA) (Autodimension_All_Sketches_Example_VB.htm)
- Get and Set Constraint for Dome Feature (VBA) (Get_and_Set_Constraint_for_Dome_Feature_Example_VB.htm)
- Move Copy Sketch Entities (C#) (Move_Copy_Sketch_Entities_Example_CSharp.htm)
- Move Copy Sketch Entities (VB.NET) (Move_Copy_Sketch_Entities_Example_VBNET.htm)
- Move Copy Sketch Entities (VBA) (Move_Copy_Sketch_Entities_Example_VB.htm)
- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)
- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)

## See Also

- `IAssemblyDoc.FeatureByName`
- `IAssemblyDoc.IFeatureByName`
- `IComponent2.FeatureByName`
- `IDrawingDoc.FeatureByName`
- `IDrawingDoc.IFeatureByName`
- `IPartDoc.FeatureById`
- `IPartDoc.IFeatureById`
- `IPartDoc.IFeatureByName`