---
type: method
interface: IFeatureManager
member: InsertVaryInstanceIncrement
returns: System.Boolean
parameters:
  -
    name: DName
    type: System.String
    description: If IncrementType is... Then set DName to... 1 Name of the pattern instance dimension to increment 2 "Spacing Increment"
  -
    name: PatternType
    type: System.Int32
    description: Type of pattern (see Remarks ): 2 = linear 4 = circular 256 = table-driven
  -
    name: IncrementType
    type: System.Int32
    description: Type of increment: 1 = dimension 2 = spacing
  -
    name: Direction
    type: System.Int32
    description: Direction in which to apply the dimension or spacing increment. If PatternType is... Then set Direction to... 2 0 = direction 1 1 = direction 2 4 0 = direction 1
  -
    name: IncrementValue
    type: System.Double
    description: Value with which to increment the pattern instance dimension or spacing
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertvaryinstanceincrement
  - ifeaturemanager
  - feature
  - manager
  - insert
  - vary
  - instance
  - increment
  - name
  - string
  - pattern
  - type
  - int32
  - direction
  - value
  - double
  - boolean
---

# IFeatureManager.InsertVaryInstanceIncrement

Obsolete. Superseded by IInstanceToVaryOptions.

## Signature

```csharp
System.Boolean InsertVaryInstanceIncrement( 
   System.String
DName
,
   System.Int32
PatternType
,
   System.Int32
IncrementType
,
   System.Int32
Direction
,
   System.Double
IncrementValue
)
```
## Parameters

- `DName` (System.String): If IncrementType is... Then set DName to... 1 Name of the pattern instance dimension to increment 2 "Spacing Increment"
- `PatternType` (System.Int32): Type of pattern (see Remarks ): 2 = linear 4 = circular 256 = table-driven
- `IncrementType` (System.Int32): Type of increment: 1 = dimension 2 = spacing
- `Direction` (System.Int32): Direction in which to apply the dimension or spacing increment. If PatternType is... Then set Direction to... 2 0 = direction 1 1 = direction 2 4 0 = direction 1
- `IncrementValue` (System.Double): Value with which to increment the pattern instance dimension or spacing

## Return Value

True if the increment is applied successfully, false if not

## Remarks

To vary the spacings or dimensions of pattern instances:
Call this method multiple times to increment multiple dimensions or spacings of pattern instances.
Call
IFeatureManager::InsertVaryInstanceOverride
multiple times to override multiple dimensions or spacings of pattern instances.
If PatternType is...
Call IFeatureManager::CreateFeature(...)
2
LinearPatternFeatureData object
4
CircularPatternFeatureData object
256
DimPatternFeatureData object