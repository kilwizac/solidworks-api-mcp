---
type: method
interface: ISelectionMgr
member: GetSelectByIdSpecification
returns: System.Boolean
parameters:
  -
    name: Object
    type: System.Object
    description: Object for which to get the selection specification
  -
    name: SelectByString
    type: System.String
    description: Feature name of Object; "" if Object is not a feature
  -
    name: ObjectType
    type: System.String
    description: Type of Object
  -
    name: Type
    type: System.Int32
    description: Type of Object as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IFeature.GetNameForSelection
  - IModelDocExtension.SelectByID2
  - ISelectionMgr.DeSelect2
  - ISelectionMgr.GetSelectedObject6
  - ISelectionMgr.GetSelectedObjectLoop2
  - ISelectionMgr.GetSelectedObjectMark
  - ISelectionMgr.GetSelectedObjectType3
  - ISelectionMgr.GetSelectedObjectsComponent4
  - ISelectionMgr.GetSelectedObjectsDrawingView2
  - ISelectionMgr.GetSelectionPoint2
  - ISelectionMgr.GetSelectionPointInSketchSpace2
  - ISelectionMgr.GetSelectionSpecification
  - ISelectionMgr.SetSelectionPoint2
keywords:
  - objects
  - select
  - selection
  - see
  - also
  - iselectionmgr
  - getselectbyidspecification
  - mgr
  - id
  - specification
  - object
  - string
  - type
  - int32
  - boolean
  - vba
  - vb
  - net
---

# ISelectionMgr.GetSelectByIdSpecification

Gets the selection specification for the specified object.

## Signature

```csharp
System.Boolean GetSelectByIdSpecification( 
   System.Object
Object
,
   out System.String
SelectByString
,
   out System.String
ObjectType
,
   out System.Int32
Type
)
```
## Parameters

- `Object` (System.Object): Object for which to get the selection specification
- `SelectByString` (System.String): Feature name of Object; "" if Object is not a feature
- `ObjectType` (System.String): Type of Object
- `Type` (System.Int32): Type of Object as defined in swSelectType_e

## Return Value

True if successful, false if not

## Examples

- Get Selection Specification (VBA) (Get_Selection_Specification_Example_VB.htm)
- Get Selection Specification (VB.NET) (Get_Selection_Specification_Example_VBNET.htm)
- Get Selection Specification (C#) (Get_Selection_Specification_Example_CSharp.htm)

## See Also

- `IFeature.GetNameForSelection`
- `IModelDocExtension.SelectByID2`
- `ISelectionMgr.DeSelect2`
- `ISelectionMgr.GetSelectedObject6`
- `ISelectionMgr.GetSelectedObjectLoop2`
- `ISelectionMgr.GetSelectedObjectMark`
- `ISelectionMgr.GetSelectedObjectType3`
- `ISelectionMgr.GetSelectedObjectsComponent4`
- `ISelectionMgr.GetSelectedObjectsDrawingView2`
- `ISelectionMgr.GetSelectionPoint2`
- `ISelectionMgr.GetSelectionPointInSketchSpace2`
- `ISelectionMgr.GetSelectionSpecification`
- `ISelectionMgr.SetSelectionPoint2`