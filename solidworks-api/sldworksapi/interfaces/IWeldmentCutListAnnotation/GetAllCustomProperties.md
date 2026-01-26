---
type: method
interface: IWeldmentCutListAnnotation
member: GetAllCustomProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldmentCutListAnnotation.GetAllCustomPropertiesCount
  - IWeldmentCutListAnnotation.GetColumnCustomProperty
  - IWeldmentCutListAnnotation.IGetAllCustomProperties
  - IWeldmentCutListAnnotation.SetColumnCustomProperty
keywords:
  - getallcustomproperties
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
  - annotation
  - all
  - custom
  - properties
  - object
  - feature
  - annotations
  - vba
  - vb
  - net
---

# IWeldmentCutListAnnotation.GetAllCustomProperties

Gets the list of available custom properties that could be used for a custom properties column in this weldment cut list table annotation.

## Signature

```csharp
System.Object GetAllCustomProperties()
```
## Parameters

None.

## Return Value

Array of strings of available custom properties

## Remarks

The list of available custom properties includes all of the items in the weldment cut list table, which includes items from the file summary items and file custom properties that have been set.

## Examples

- Get Weldment Cut List Feature and Annotations (VBA) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_VB.htm)
- Get Weldment Cut List Feature and Annotations (VB.NET) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_VBNET.htm)
- Get Weldment Cut List Feature and Annotations (C#) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_CSharp.htm)

## See Also

- `IWeldmentCutListAnnotation.GetAllCustomPropertiesCount`
- `IWeldmentCutListAnnotation.GetColumnCustomProperty`
- `IWeldmentCutListAnnotation.IGetAllCustomProperties`
- `IWeldmentCutListAnnotation.SetColumnCustomProperty`