---
type: property
interface: IMacroFeatureData
member: EditBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.EnableMultiBodyConsume
  - IMacroFeatureData.GetEditBodiesCount
  - IMacroFeatureData.IGetEditBodies
  - IMacroFeatureData.ISetEditBodies
keywords:
  - editbodies
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edit
  - bodies
  - object
  - cut
  - body
  - half
  - using
  - vba
readonly: null
---

# IMacroFeatureData.EditBodies

Gets or sets the bodies to be modified by this macro feature.

## Signature

```csharp
System.Object EditBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IMacroFeatureData.EnableMultiBodyConsume`
- `IMacroFeatureData.GetEditBodiesCount`
- `IMacroFeatureData.IGetEditBodies`
- `IMacroFeatureData.ISetEditBodies`