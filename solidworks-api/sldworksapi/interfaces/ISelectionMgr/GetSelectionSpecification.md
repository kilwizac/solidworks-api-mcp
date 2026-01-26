---
type: method
interface: ISelectionMgr
member: GetSelectionSpecification
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1 <= Index in the current list of selected items <= ISelectionMgr::GetSelectedObjectCount2
  -
    name: SelectByString
    type: System.String
    description: Feature name of object at Index; "" if object is not a feature
  -
    name: ObjectType
    type: System.String
    description: Type of object at Index
  -
    name: Type
    type: System.Int32
    description: Type of object at Index as defined in swSelectType_e
  -
    name: X
    type: System.Double
    description: X coordinate of object at Index; 0 if SelectByString is not ""
  -
    name: Y
    type: System.Double
    description: Y coordinate of object at Index; 0 if SelectByString is not ""
  -
    name: Z
    type: System.Double
    description: Z coordinate of object at Index; 0 if SelectByString is not ""
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IFeature.GetNameForSelection
  - IModelDocExtension.SelectByID2
  - ISelectionMgr.GetSelectByIdSpecification
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent4
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.SetSelectedObjectMark
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - objects
  - select
  - getselectionspecification
  - mgr
  - specification
  - index
  - int32
  - string
  - object
  - type
  - double
  - boolean
  - vba
  - vb
  - net
---

# ISelectionMgr.GetSelectionSpecification

Gets the selection specification at the specified index of the current selection list.

## Signature

```csharp
System.Boolean GetSelectionSpecification( 
   System.Int32
Index
,
   out System.String
SelectByString
,
   out System.String
ObjectType
,
   out System.Int32
Type
,
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
Z
)
```
## Parameters

- `Index` (System.Int32): 1 <= Index in the current list of selected items <= ISelectionMgr::GetSelectedObjectCount2
- `SelectByString` (System.String): Feature name of object at Index; "" if object is not a feature
- `ObjectType` (System.String): Type of object at Index
- `Type` (System.Int32): Type of object at Index as defined in swSelectType_e
- `X` (System.Double): X coordinate of object at Index; 0 if SelectByString is not ""
- `Y` (System.Double): Y coordinate of object at Index; 0 if SelectByString is not ""
- `Z` (System.Double): Z coordinate of object at Index; 0 if SelectByString is not ""

## Return Value

True if successful, false if not

## Examples

- Get Selection Specification (VBA) (Get_Selection_Specification_Example_VB.htm)
- Get Selection Specification (VB.NET) (Get_Selection_Specification_Example_VBNET.htm)
- Get Selection Specification (C#) (Get_Selection_Specification_Example_CSharp.htm)

## See Also

- `IFeature.GetNameForSelection`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr.GetSelectByIdSpecification`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent4`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.SetSelectedObjectMark`
- `ISelectionMgr.SetSelectionPoint2`