---
type: property
interface: ISketchBlockInstance
member: Name
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - name
  - sketch
  - block
  - instance
  - string
  - data
  - any
  - document
  - vba
  - information
  - drawing
readonly: null
---

# ISketchBlockInstance.Name

Gets or sets the name of this block instance.

## Signature

```csharp
System.String Name {get; set;}
```
## Parameters

None.

## Return Value

Name of this block instance

## Remarks

After setting the name of a block instance, use
IFeatureManager::UpdateFeatureTree
to see its name in the FeatureManager design tree.

## Examples

- Get and Set Blocks Data in Any Document (VBA) (Get_and_Set_Blocks_Data_in_Any_Document_Example_VB.htm)
- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)
- Get Blocks in Drawing (VBA) (Get_Blocks_in_Drawing_Example_VB.htm)