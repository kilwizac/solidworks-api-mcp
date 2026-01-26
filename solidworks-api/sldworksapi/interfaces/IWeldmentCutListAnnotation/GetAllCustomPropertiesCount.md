---
type: method
interface: IWeldmentCutListAnnotation
member: GetAllCustomPropertiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldmentCutListAnnotation.GetAllCustomProperties
  - IWeldmentCutListAnnotation.GetColumnCustomProperty
  - IWeldmentCutListAnnotation.SetColumnCustomProperty
keywords:
  - getallcustompropertiescount
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
  - annotation
  - all
  - custom
  - properties
  - count
  - int32
  - feature
  - annotations
  - vba
  - vb
  - net
---

# IWeldmentCutListAnnotation.GetAllCustomPropertiesCount

Gets the number of items in the list of available custom properties that could be used for a custom properties column in this weldment cut list table annotation.

## Signature

```csharp
System.Int32 GetAllCustomPropertiesCount()
```
## Parameters

None.

## Return Value

Number of available custom properties

## Remarks

Call this method before calling
IWeldmentCutListAnnotation::IGetAllCustomProperties
.
The list of possible custom properties includes all of the items in the weldment cut list table, which includes items from the file summary items and file custom properties that have been set.

## Examples

- Get Weldment Cut List Feature and Annotations (VBA) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_VB.htm)
- Get Weldment Cut List Feature and Annotations (VB.NET) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_VBNET.htm)
- Get Weldment Cut List Feature and Annotations (C#) (Get_Weldment_Cut-list_Feature_and_Annotations_Example_CSharp.htm)

## See Also

- `IWeldmentCutListAnnotation.GetAllCustomProperties`
- `IWeldmentCutListAnnotation.GetColumnCustomProperty`
- `IWeldmentCutListAnnotation.SetColumnCustomProperty`