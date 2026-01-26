---
type: method
interface: IFeatureManager
member: InsertVaryInstanceOverride
returns: System.Boolean
parameters:
  -
    name: DName
    type: System.String
    description: If OverrideType is... Then set DName to... 1 Name of the pattern instance dimension to override 2 "Spacing Increment"
  -
    name: PatternType
    type: System.Int32
    description: Type of pattern (see Remarks ): 2 = linear 4 = circular 256 = variable
  -
    name: OverrideType
    type: System.Int32
    description: Type of increment override: 1 = dimension 2 = spacing
  -
    name: Direction
    type: System.Int32
    description: Direction in which to apply the spacing override. If OverrideType is ... Then set Direction to ... 2 0 = direction 1 1 = direction 2 1 -1
  -
    name: InstanceRowIndex
    type: System.Int32
    description: 0 < row index of the instance to modify < number of instances per row
  -
    name: InstanceColumnIndex
    type: System.Int32
    description: 0 < column index of the instance to modify < number of instances per column; valid only for PatternType = 2
  -
    name: OverrideValue
    type: System.Double
    description: Value to override the current value of the dimension or spacing of the specified instance
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertvaryinstanceoverride
  - ifeaturemanager
  - feature
  - manager
  - insert
  - vary
  - instance
  - override
  - name
  - string
  - pattern
  - type
  - int32
  - direction
  - row
  - index
  - column
  - value
  - double
  - boolean
---

# IFeatureManager.InsertVaryInstanceOverride

Obsolete. Superseded by IInstanceToVaryOptions.

## Signature

```csharp
System.Boolean InsertVaryInstanceOverride( 
   System.String
DName
,
   System.Int32
PatternType
,
   System.Int32
OverrideType
,
   System.Int32
Direction
,
   System.Int32
InstanceRowIndex
,
   System.Int32
InstanceColumnIndex
,
   System.Double
OverrideValue
)
```
## Parameters

- `DName` (System.String): If OverrideType is... Then set DName to... 1 Name of the pattern instance dimension to override 2 "Spacing Increment"
- `PatternType` (System.Int32): Type of pattern (see Remarks ): 2 = linear 4 = circular 256 = variable
- `OverrideType` (System.Int32): Type of increment override: 1 = dimension 2 = spacing
- `Direction` (System.Int32): Direction in which to apply the spacing override. If OverrideType is ... Then set Direction to ... 2 0 = direction 1 1 = direction 2 1 -1
- `InstanceRowIndex` (System.Int32): 0 < row index of the instance to modify < number of instances per row
- `InstanceColumnIndex` (System.Int32): 0 < column index of the instance to modify < number of instances per column; valid only for PatternType = 2
- `OverrideValue` (System.Double): Value to override the current value of the dimension or spacing of the specified instance

## Return Value

True if the override is applied successfully, false if not

## Remarks

To vary the dimensions or spacings of pattern instances:
Call this method multiple times to override multiple dimensions or spacings of pattern instances.
Call
IFeatureManager::InsertVaryInstanceIncrement
multiple times to increment multiple dimensions or spacings of pattern instances.
If PatternType is...
Call IFeatureManager::CreateFeature(...)
2
LinearPatternFeatureData object
4
CircularPatternFeatureData object
256
DimPatternFeatureData object