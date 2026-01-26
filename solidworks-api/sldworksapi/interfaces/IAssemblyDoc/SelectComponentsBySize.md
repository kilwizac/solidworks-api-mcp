---
type: method
interface: IAssemblyDoc
member: SelectComponentsBySize
returns: System.Boolean
parameters:
  -
    name: Percent
    type: System.Double
    description: 0.0 <= Percent of assembly size <= 100.0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - selections
  - ui
related:
  - IModelDocExtension.SelectAll
  - IModelDocExtension.SelectByID2
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - select
  - size
  - selectcomponentsbysize
  - assembly
  - doc
  - components
  - percent
  - double
  - boolean
  - vba
  - vb
  - net
---

# IAssemblyDoc.SelectComponentsBySize

Selects assembly components by percent of assembly size.

## Signature

```csharp
System.Boolean SelectComponentsBySize( 
   System.Double
Percent
)
```
## Parameters

- `Percent` (System.Double): 0.0 <= Percent of assembly size <= 100.0

## Return Value

True if Percent is valid, false if Percent > 100 or Percent < 0

## Remarks

This method corresponds to
Tools > Component Selection > Select By Size
.

## Examples

- Select Assembly Components by Size (VBA) (Select_Assembly_Components_by_Size_Example_VB.htm)
- Select Assembly Components by Size (VB.NET) (Select_Assembly_Components_by_Size_Example_VBNET.htm)
- Select Assembly Components by Size (C#) (Select_Assembly_Components_by_Size_Example_CSharp.htm)

## See Also

- `IModelDocExtension.SelectAll`
- `IModelDocExtension.SelectByID2`