---
type: method
interface: IAdvancedSelectionCriteria
member: AddItem
returns: System.Int32
parameters:
  -
    name: Property
    type: System.String
    description: Name of property
  -
    name: Condition
    type: System.Int32
    description: Condition as defined in swAdvSelectType_e
  -
    name: Value
    type: System.String
    description: Text of the value
  -
    name: IsAnd
    type: System.Boolean
    description: True if all of the criteria in the advanced component selection list must be met, false if only this criteria in the advanced component selection list must be met
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - additem
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - add
  - item
  - string
  - condition
  - int32
  - value
  - boolean
  - use
  - component
  - vba
  - vb
  - net
---

# IAdvancedSelectionCriteria.AddItem

Obsolete. Superseded by IAdvancedSelectionCriteria::AddItem2.

## Signature

```csharp
System.Int32 AddItem( 
   System.String
Property
,
   System.Int32
Condition
,
   System.String
Value
,
   System.Boolean
IsAnd
)
```
## Parameters

- `Property` (System.String): Name of property
- `Condition` (System.Int32): Condition as defined in swAdvSelectType_e
- `Value` (System.String): Text of the value
- `IsAnd` (System.Boolean): True if all of the criteria in the advanced component selection list must be met, false if only this criteria in the advanced component selection list must be met

## Return Value

Index number of the newly added criteria in the advanced component selection list

## Examples

- Use Advanced Component Selection (VBA) (Use_Advanced_Component_Selection_Example_VB.htm)
- Use Advanced Component Selection (VB.NET) (Use_Advanced_Component_Selection_Example_VBNET.htm)
- Use Advanced Component Selection (C#) (Use_Advanced_Component_Selection_Example_CSharp.htm)