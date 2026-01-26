---
type: method
interface: IAdvancedSelectionCriteria
member: GetItem2
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Index number of the criterion to retrieve
  -
    name: Category1
    type: System.String
    description: Name of Category1 (see Remarks )
  -
    name: Category2
    type: System.String
    description: Name of Category2 (see Remarks )
  -
    name: Condition
    type: System.Int32
    description: Condition as defined in swAdvSelectType_e (see Remarks )
  -
    name: Value
    type: System.String
    description: Text value satisfying Condition (see Remarks )
  -
    name: IsAnd
    type: System.Boolean
    description: True if all of the criteria in the advanced component selection criteria list must be met, false if only this criterion must be met
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - getitem2
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - item2
  - index
  - int32
  - category1
  - string
  - category2
  - condition
  - value
  - boolean
---

# IAdvancedSelectionCriteria.GetItem2

Gets the specified advanced component selection criterion.

## Signature

```csharp
System.Int32 GetItem2( 
   System.Int32
Index
,
   out System.String
Category1
,
   out System.String
Category2
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

- `Index` (System.Int32): Index number of the criterion to retrieve
- `Category1` (System.String): Name of Category1 (see Remarks )
- `Category2` (System.String): Name of Category2 (see Remarks )
- `Condition` (System.Int32): Condition as defined in swAdvSelectType_e (see Remarks )
- `Value` (System.String): Text value satisfying Condition (see Remarks )
- `IsAnd` (System.Boolean): True if all of the criteria in the advanced component selection criteria list must be met, false if only this criterion must be met

## Return Value

Value of the Index argument or -1 if criterion specified by Index not found

## Remarks

Call
IAdvancedSelectionCriteria::GetItemCount
to get a valid value for Index before calling this method.
For a list of possible Category1, Category2, Condition, and Value values, see
Assemblies > Basic Component Operations > Selecting Components > Advanced Component Selection > Search Criteria for Advanced Component Selection
topic in the SOLIDWORKS Design user-interface help.

## Examples

- IAdvancedSelectionCriteria (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSelectionCriteria)