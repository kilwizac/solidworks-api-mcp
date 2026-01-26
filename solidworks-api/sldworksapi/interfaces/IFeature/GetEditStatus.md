---
type: method
interface: IFeature
member: GetEditStatus
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - editing
  - status
  - edit
  - features
  - sketches
  - sketch
  - isketch
  - geteditstatus
  - int32
  - vb
  - net
  - vba
---

# IFeature.GetEditStatus

Gets whether the feature can currently be edited.

## Signature

```csharp
System.Int32 GetEditStatus()
```
## Parameters

None.

## Return Value

Editing status of feature as defined in swFeatureEditStatus_e

## Remarks

Although swFeatureEditStatus_e is a bitmask, you currently cannot combine its mutually exclusive enumerators and you must examine the bit value of the return value for the editing status of the feature.
If...
Then the return value will be...
a feature and all of its dependent items are not currently being edited
0 (swFeature_Editable) for the feature and all of its dependent items
a feature is currently being edited
1 (swFeature_NonEditable); this will also be the return value for all of the feature's dependent items
a sketch is currently being edited
2 (swFeature_UnderEditing)

## Examples

- Get Editing Status of Features (VB.NET) (Get_Editing_Status_of_Features_Example_VBNET.htm)
- Get Editing Status of Features (VBA) (Get_Editing_Status_of_Features_Example_VB.htm)
- Get Editing Status of Features (C#) (Get_Editing_Status_of_Features_Example_CSharp.htm)