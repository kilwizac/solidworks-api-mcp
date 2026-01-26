---
type: property
interface: IMacroFeatureData
member: EnableMultiBodyConsume
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMacroFeatureData.EditBodies
  - IMacroFeatureData.GetEditBodiesCount
  - IMacroFeatureData.IGetEditBodies
keywords:
  - multibody
  - macro
  - feature
  - enablemultibodyconsume
  - imacrofeaturedata
  - data
  - enable
  - multi
  - body
  - consume
  - boolean
  - create
  - vba
  - vb
  - net
readonly: null
---

# IMacroFeatureData.EnableMultiBodyConsume

Gets or sets whether to replace the original edit body with multiple solid bodies created during regeneration of a multibody macro feature.

## Signature

```csharp
System.Boolean EnableMultiBodyConsume {get; set;}
```
## Parameters

None.

## Return Value

True to replace the original edit body with multiple solid bodies, false to not

## Remarks

This method was designed to work specifically with macro features that generate multiple solid bodies. The
rebuild
function of a macro feature creates or regenerates the macro feature in the FeatureManager design tree. By default, if the rebuild function creates multiple solid bodies, it appends the new solid bodies to the original edit body in the Solid Bodies folder of the FeatureManager design tree.
Always set this property to true in the rebuild function when working with macro features involving multiple input or output bodies.

## Examples

- Create Multibody Macro Feature (VBA) (Create_Multibody_Macro_Feature_Example_VB.htm)
- Create Multibody Macro Feature (VB.NET) (Create_Multibody_Macro_Feature_Example_VBNET.htm)
- Create Multibody Macro Feature (C#) (Create_Multibody_Macro_Feature_Example_CSharp.htm)

## See Also

- `IMacroFeatureData.EditBodies`
- `IMacroFeatureData.GetEditBodiesCount`
- `IMacroFeatureData.IGetEditBodies`