---
type: method
interface: IDimPatternFeatureData
member: GetInstanceSuppressStateByName
returns: System.Boolean
parameters:
  -
    name: InstanceName
    type: System.String
    description: Name of the pattern instance (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimPatternFeatureData.GetInstanceSuppressStateByIndex
  - IDimPatternFeatureData.SetInstanceSuppressStateByIndex
  - IDimPatternFeatureData.SetInstanceSuppressStateByName
keywords:
  - getinstancesuppressstatebyname
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

# IDimPatternFeatureData.GetInstanceSuppressStateByName

Gets whether the pattern instance with the specified name is suppressed in this variable pattern feature.

## Signature

```csharp
System.Boolean GetInstanceSuppressStateByName( 
   System.String
InstanceName
)
```
## Parameters

- `InstanceName` (System.String): Name of the pattern instance (see Remarks )

## Return Value

True if the pattern instance is suppressed, false if not

## Remarks

Use
IDimPatternFeatureData::GetInstanceNameByIndex
to get InstanceName.

## See Also

- `IDimPatternFeatureData.GetInstanceSuppressStateByIndex`
- `IDimPatternFeatureData.SetInstanceSuppressStateByIndex`
- `IDimPatternFeatureData.SetInstanceSuppressStateByName`