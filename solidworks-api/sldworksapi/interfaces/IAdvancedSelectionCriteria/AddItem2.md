---
type: method
interface: IAdvancedSelectionCriteria
member: AddItem2
returns: System.Int32
parameters:
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
    description: True if all of the criteria in the advanced component selection list must be met, false if only this criteria in the advanced component selection list must be met
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - additem2
  - iadvancedselectioncriteria
  - advanced
  - selection
  - criteria
  - add
  - item2
  - category1
  - string
  - category2
  - condition
  - int32
  - value
  - boolean
---

# IAdvancedSelectionCriteria.AddItem2

Adds the specified advanced component selection criterion to the list.

## Signature

```csharp
System.Int32 AddItem2( 
   System.String
Category1
,
   System.String
Category2
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

- `Category1` (System.String): Name of Category1 (see Remarks )
- `Category2` (System.String): Name of Category2 (see Remarks )
- `Condition` (System.Int32): Condition as defined in swAdvSelectType_e (see Remarks )
- `Value` (System.String): Text value satisfying Condition (see Remarks )
- `IsAnd` (System.Boolean): True if all of the criteria in the advanced component selection list must be met, false if only this criteria in the advanced component selection list must be met

## Return Value

Index number of the newly added criterion in the advanced component selection criteria list

## Remarks

For a list of possible Category1, Category2, Condition, and Value values, see the
Assemblies > Basic Component Operations > Selecting Components > Advanced Component Selection > Search Criteria for Advanced Component Selection
topic in the SOLIDWORKS Design user-interface help.
After calling this method multiple times to add criteria:
Save
the criteria.
Select
the components satisfying the criteria.