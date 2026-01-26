---
type: method
interface: IDimPatternFeatureData
member: SetInstanceSuppressStateByName
returns: System.String
parameters:
  -
    name: InstanceName
    type: System.String
    description: Name of pattern instance to suppress (see Remarks )
  -
    name: SuppressState
    type: System.Boolean
    description: True if the pattern instance is suppressed, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.GetInstanceSuppressStateByIndex
  - IDimPatternFeatureData.GetInstanceSuppressStateByName
  - IDimPatternFeatureData.SetInstanceSuppressStateByIndex
keywords:
  - setinstancesuppressstatebyname
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - suppress
  - state
  - name
  - string
  - boolean
---

# IDimPatternFeatureData.SetInstanceSuppressStateByName

Sets whether a pattern instance with the specified name is suppressed in this variable pattern feature.

## Signature

```csharp
System.String SetInstanceSuppressStateByName( 
   System.String
InstanceName
,
   System.Boolean
SuppressState
)
```
## Parameters

- `InstanceName` (System.String): Name of pattern instance to suppress (see Remarks )
- `SuppressState` (System.Boolean): True if the pattern instance is suppressed, false if not

## Return Value

If the pattern instance is... Then Return Value is an... Suppressed Empty string indicating success Not suppressed Error string

## Remarks

Use
IDimPatternFeatureData::GetInstanceNameByIndex
to get InstanceName.

## See Also

- `IDimPatternFeatureData.GetInstanceSuppressStateByIndex`
- `IDimPatternFeatureData.GetInstanceSuppressStateByName`
- `IDimPatternFeatureData.SetInstanceSuppressStateByIndex`