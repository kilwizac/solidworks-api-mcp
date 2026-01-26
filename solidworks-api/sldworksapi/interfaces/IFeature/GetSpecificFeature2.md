---
type: method
interface: IFeature
member: GetSpecificFeature2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getspecificfeature2
  - ifeature
  - feature
  - specific
  - feature2
  - object
  - spline
  - points
  - determine
  - sketch
  - suitable
  - vba
  - find
  - total
  - length
  - segments
  - parameters
  - reference
  - axis
  - constraints
  - insert
  - position
  - dxf
  - file
  - drawing
  - add
  - dimension
  - areas
  - midsurface
  - faces
  - vb
  - net
---

# IFeature.GetSpecificFeature2

Gets the more specific interface to a selected feature.

## Signature

```csharp
System.Object GetSpecificFeature2()
```
## Parameters

None.

## Return Value

Specific interface (see Remarks )

## Remarks

This method gets these interfaces to a corresponding selected feature:
IAttribute
IBodyFolder
IBomFeature
ICamera
ICommentFolder
ICosmeticWeldBeadFolder
IDetailCircle
IDrSection
IFeatureFolder
IFlatPatternFolder
ILight
IMate2
IMateInPlace
IMateReference
IMidSurface3
IProfileGroupFolder
IRefAxis
IReferenceCurve
IRefPlane
IRefPoint
ISelectionSetFolder
ISensor
ISheetMetalFolder
ISketch
ISketchBlockDefinition
ISketchBlockInstance
ISketchPicture
IStructureSystemFolder
IWeldmentCutListFeature
If...
Then...
You start with an IFeature object and want to get a more specific object
A call to IFeature::GetSpecificFeature2 is required. If you have the more specific object, then a call to QueryInterface in C++ or an assignment to a IFeature-typed variable allows an application to get back to the IFeature object.
You are writing a Dispatch application
You can use
IFeature::GetTypeName
or
IFeature::GetTypeName2
to identify the type of Dispatch object returned so that you can call the appropriate properties and methods for that object.
You are writing a COM application
You can use the return value with QueryInterface to determine the object returned.
No interface exists or there is no specific object for the type of feature
This method returns Nothing or null.
For some feature types, this method returns Nothing or null because there is no specific object for that type of feature (e.g., features such as extrusions, lofts, fillets, chamfers, etc.). For these types of features, call
IFeature::GetDefinition
to get their feature data objects.
For other entities selected in the FeatureManager design tree, you must know its interface in advance and cast the return value of
ISelectionMgr::GetSelectedObject6
to the correct interface.
For all functions that return objects, always check whether the return value is Nothing or null before you try to use it.

## Examples

- Get Spline Points (C++) (Get_Spline_Points_Example_CPlusPlus_COM.htm)
- Determine if Sketch Suitable for Feature (VBA) (Determine_If_Sketch_Suitable_for_Feature_Example_VB.htm)
- Find Total Length of Sketch Segments in Sketch (VBA) (Find_Total_Length_of_Sketch_Segments_in_Sketch_Example_VB.htm)
- Get Parameters for Reference Axis (VBA) (Get_Parameters_for_Reference_Axis_Example_VB.htm)
- Get Sketch Constraints (VBA) (Get_Sketch_Constraints_Example_VB.htm)
- Insert and Position DXF File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Insert DXF File and Add Dimension (VBA) (Insert_DXF_File_and_Add_Dimension_Example_VB.htm)
- Insert Reference Points (VBA) (Insert_Reference_Points_Example_VB.htm)
- Get Areas of MidSurface Faces (C#) (Get_Areas_of_MidSurface_Faces_Example_CSharp.htm)
- Get Areas of MidSurface Faces (VB.NET) (Get_Areas_of_MidSurface_FAces_Example_VBNET.htm)
- Get Areas of MidSurface Faces (VBA) (Get_Areas_of_MidSurface_Faces_Example_VB.htm)