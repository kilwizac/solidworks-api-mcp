---
type: method
interface: IDimPatternFeatureData
member: SetInstanceSuppressStateByIndex
returns: System.String
parameters:
  -
    name: TableRowIndex
    type: System.Int32
    description: Index of the pattern instance in the pattern table to suppress (see Remarks )
  -
    name: SuppressState
    type: System.Boolean
    description: True to suppress the pattern instance, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.GetInstanceSuppressStateByIndex
  - IDimPatternFeatureData.GetInstanceSuppressStateByName
  - IDimPatternFeatureData.SetInstanceSuppressStateByName
keywords:
  - setinstancesuppressstatebyindex
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - suppress
  - state
  - index
  - table
  - row
  - int32
  - boolean
  - string
---

# IDimPatternFeatureData.SetInstanceSuppressStateByIndex

Sets whether the pattern instance with the specified index in the pattern table is suppressed in this variable pattern feature.

## Signature

```csharp
System.String SetInstanceSuppressStateByIndex( 
   System.Int32
TableRowIndex
,
   System.Boolean
SuppressState
)
```
## Parameters

- `TableRowIndex` (System.Int32): Index of the pattern instance in the pattern table to suppress (see Remarks )
- `SuppressState` (System.Boolean): True to suppress the pattern instance, false to not

## Return Value

If the pattern instance is... Then Return Value is an... Suppressed Empty string indicating success Not suppressed Error string

## Remarks

Use
IDimPatternFeatureData::GetTableRowIndex
to get TableRowIndex.

## See Also

- `IDimPatternFeatureData.GetInstanceSuppressStateByIndex`
- `IDimPatternFeatureData.GetInstanceSuppressStateByName`
- `IDimPatternFeatureData.SetInstanceSuppressStateByName`