---
type: method
interface: IModelDocExtension
member: SelectByID2
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of object to select or an empty string
  -
    name: Type
    type: System.String
    description: Type of object (uppercase) as defined in swSelectType_e or an empty string
  -
    name: X
    type: System.Double
    description: X selection location or 0
  -
    name: Y
    type: System.Double
    description: Y selection location or 0
  -
    name: Z
    type: System.Double
    description: Z selection location or 0
  -
    name: Append
    type: System.Boolean
    description: If... An, if entity is... Then... True Not already selected Entity is appended to the current selection list Already selected Entity is removed from the current selection list False Not already selected Current selection is cleared and then the entity is put on the list Already selected Current selection list remains the same
  -
    name: Mark
    type: System.Int32
    description: Value that you want to use as a mark; this value is used by other functions that require ordered selection (see Remarks )
  -
    name: Callout
    type: Callout
    description: Pointer to the associated callout
  -
    name: SelectOption
    type: System.Int32
    description: Selection option as defined in swSelectOption_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - selections
  - ui
related:
  - IAssemblyDoc.SelectComponentsBySize
  - IFeature.GetNameForSelection
  - IModelDocExtension.IMultiSelect
  - IModelDocExtension.MultiSelect
  - IModelDocExtension.SelectAll
  - ISelectData
  - ISelectionMgr
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectionSpecification
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - id
  - select
  - selectbyid2
  - imodeldocextension
  - model
  - doc
  - extension
  - id2
  - name
  - string
  - type
  - double
  - append
  - boolean
  - mark
  - int32
  - callout
  - option
  - access
  - assembly
  - add
  - component
  - mate
  - create
  - cylinder
  - traverse
  - bodies
  - distance
  - mates
  - vba
  - names
  - multibody
  - part
  - selected
  - object
  - insert
  - wrap
  - feature
  - connect
  - solidworks
  - session
  - equation
  - driven
  - curve
  - vb
  - net
  - multiple
  - sketch
  - segments
  - sweep
  - path
  - splines
  - loft
  - guide
  - curves
---

# IModelDocExtension.SelectByID2

Selects the specified entity.

## Signature

```csharp
System.Boolean SelectByID2( 
   System.String
Name
,
   System.String
Type
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Boolean
Append
,
   System.Int32
Mark
,
   Callout
Callout
,
   System.Int32
SelectOption
)
```
## Parameters

- `Name` (System.String): Name of object to select or an empty string
- `Type` (System.String): Type of object (uppercase) as defined in swSelectType_e or an empty string
- `X` (System.Double): X selection location or 0
- `Y` (System.Double): Y selection location or 0
- `Z` (System.Double): Z selection location or 0
- `Append` (System.Boolean): If... An, if entity is... Then... True Not already selected Entity is appended to the current selection list Already selected Entity is removed from the current selection list False Not already selected Current selection is cleared and then the entity is put on the list Already selected Current selection list remains the same
- `Mark` (System.Int32): Value that you want to use as a mark; this value is used by other functions that require ordered selection (see Remarks )
- `Callout` (Callout): Pointer to the associated callout
- `SelectOption` (System.Int32): Selection option as defined in swSelectOption_e (see Remarks )

## Return Value

True if item was successfully selected, false if not

## Remarks

Use this method instead of using the selection methods on the following objects:
IAnnotation
IComponent2
IFeature
IFeatureManager
ISketchHatch
ISketchPoint
ISketchSegment
ISketchSpline
The previously listed objects' selection methods do not work well when a PropertyManager page is open or a command is running. This method, IModelDocExtension::SelectByID2, handles selection correctly regardless if a command is running.
If your application already has an object handle (for example, IFace2), use the appropriate Select method to select the item directly using its handle.
To filter the objects selected by this method, set the Type parameter. If no filtering is required, then pass an empty string for this parameter.
For example, to select an object of type swSelDIMENSIONS, use the string that appears in the comment column, "DIMENSION". The objectType might change based on your current state. For example, to select a sketch point that was created in the active sketch, specify Type as "SKETCHPOINT". However, if you do not have an active sketch, or if the point was created in a sketch other than the active sketch, or the point is the origin point, then specify Type as "EXTSKETCHPOINT".
If Type is specified, then this method returns false if it cannot find the matching object type.
The Name parameter is not intended for selection of faces, edges, and so on. This is a case-sensitive string for objects that are automatically named by SOLIDWORKS during entity creation, such as dimensions, drawing views, and so on. This method tries to find and select an object whose name matches the Name parameter; however, the match needs to be exact for this method to return true.
For example:
If a string is passed that matches an object name but whose case does not match exactly, then this method could return false. For selection of dimensions, the Name parameter must be fully qualified.
Specify "D1@Sketch2@Part1.SLDPRT" rather than "D1@Sketch2"; otherwise, this method could return false. If you do not know the object name, or if it is an item that is not automatically named by SOLIDWORKS, you can pass an empty string.
If you are using the Name parameter, then specify the x, y, and z  coordinates in terms of the context where the item was created. For example, if you want to select a sketch point using its name (for example, "Point1") in the Name parameter, then specify X, Y, and Z in terms of the sketch where the point was created. Even if the sketch is not active, specify the X, Y, and Z values in terms of sketch space when you use the Name parameter. In certain situations, you can also pass in the x, y, and z coordinates as (0,0,0). For example, to select a feature shown in the FeatureManager design tree, you do not need to specify x, y, and z coordinates. However, to select objects such as faces or when you need a point location picked, you must specify the x, y, and z coordinates. If you are not using the Name parameter as a filter, then specify the x, y, and z coordinates in terms of model space. The coordinates are used when the object name is not provided, and the coordinates are dependent on the view state.
If you do not know the object name or the object type, pass empty strings for the Name and Type parameters. The selection routine makes the best attempt to select the correct object.
To get
IFace2
,
IEdge
or
IVertex
objects by name, use
IPartDoc::GetEntityByName
or
IPartDoc::IGetEntityByName
.
For SelectOption, specify swSelectOption_e.swSelectOptionDefault to indicate that the Shift key is not used during selection or specify swSelectOption_e.swSelectOptionExtensive to indicate that the Shift key is used during selection.
The
IModelDoc2
object used to call this method must be an open and visible document. For example, you cannot use the IModelDoc2 object returned from an assembly component (
IComponent2::GetModelDoc
or
IComponent2::IGetModelDoc
) unless that SOLIDWORKS component part or subassembly is an open and visible document. In this case, you can select the item using the fully qualified name (for example, "Plane4@Part1-1@Assem1").
When selecting IFace2 objects, this method uses the specified point as input to the normal user-interface selection routines to use the speed of ray tracing. As a result, if the view changes from the original recorded size or orientation, then the same IFace2 might not be selected next time. If your application has a pointer to the IFace2 object to be selected, then you can call the
IEntity::Select4
method directly. Otherwise, you can call
IModelDocExtension::SelectByRay
. Calling either of these methods allows for tighter control over the starting point and the direction in which to search. IModelDocExtension::SelectByRay is recorded when IModelDocExtension::SelectByID2 relies on the selection coordinates and prone to failure if the model view is altered.
Use:
Mark of 4 when selecting multiple edges or sketch segments and grouping them into one object for the path for a sweep feature. See the
Select Multiple Sketch Segments for Sweep Path
examples.
Mark of 2 when selecting multiple edges, sketch segments, or curves and grouping them into one object for the guide curves for a loft feature. See the
Select Multiple Splines for Loft Guide Curves
examples.
ISelectionMgr::AddSelectionListObject
and
ISelectionMgr::AddSelectionListObjects
to add objects to a selection list without preselecting the objects in the user interface.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)
- Create Cylinder (C++) (Create_Cylinder_Example_CPlusPlus_COM.htm)
- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Add Distance Mates (VBA) (Add_Distance_Mates_Example_VB.htm)
- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Get Selected Object (VBA) (Get_Selected_Object_Example_VB.htm)
- Insert Wrap Feature (VBA) (Insert_Wrap_Feature_Example_VB.htm)
- Select Bodies (VBA) (Select_Bodies_Example_VB.htm)
- Connect to SOLIDWORKS Session (C#) (Connect_to_SOLIDWORKS_Session_CSharp.htm)
- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)
- Select Multiple Sketch Segments for Sweep Path (C#) (Select_Multiple_Paths_for_Sweep_Path_Example_CSharp.htm)
- Select Multiple Sketch Segments for Sweep Path (VB.NET) (Select_Multiple_Paths_for_Sweep_Path_Example_VBNET.htm)
- Select Multiple Sketch Segments for Sweep Path (VBA) (Select_Multiple_Paths_for_Sweep_Path_Example_VB.htm)
- Select Multiple Splines for Loft Guide Curves (C#) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_CSharp.htm)
- Select Multiple Splines for Loft Guide Curves (VB.NET) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_VBNET.htm)
- Select Multiple Splines for Loft Guide Curves (VBA) (Select_Multiple_Splines_for_Loft_Guide_Curves_Example_VB.htm)

## See Also

- `IAssemblyDoc.SelectComponentsBySize`
- `IFeature.GetNameForSelection`
- `IModelDocExtension.IMultiSelect`
- `IModelDocExtension.MultiSelect`
- `IModelDocExtension.SelectAll`
- `ISelectData`
- `ISelectionMgr`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectionSpecification`