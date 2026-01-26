---
type: method
interface: IAdvancedSelectionCriteria
member: GetItem
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the criteria in the advanced component selection list
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
  - getitem
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - item
  - index
  - int32
  - string
  - condition
  - value
  - boolean
  - use
  - component
  - vba
  - vb
  - net
---

# IAdvancedSelectionCriteria.GetItem

Obsolete. Superseded by IAdvancedSelectionCriteria::GetItem2.

## Signature

```csharp
System.Int32 GetItem( 
   System.Int32
Index
,
   out System.String
Property
,
   out System.Int32
Condition
,
   out System.String
Value
,
   out System.Boolean
IsAnd
)
```
## Parameters

- `Index` (System.Int32): Index number of the criteria in the advanced component selection list
- `Property` (System.String): Name of property
- `Condition` (System.Int32): Condition as defined in swAdvSelectType_e
- `Value` (System.String): Text of the value
- `IsAnd` (System.Boolean): True if all of the criteria in the advanced component selection list must be met, false if only this criteria in the advanced component selection list must be met

## Return Value

Value of the Index argument or -1 if criteria specified by Index not found

## Remarks

Call
IAdvancedSelectionCriteria::GetItemCount
to get a valid value for Index before calling this method.

## Examples

- Use Advanced Component Selection (VBA) (Use_Advanced_Component_Selection_Example_VB.htm)
- Use Advanced Component Selection (VB.NET) (Use_Advanced_Component_Selection_Example_VBNET.htm)
- Use Advanced Component Selection (C#) (Use_Advanced_Component_Selection_Example_CSharp.htm)