---
type: method
interface: IDimPatternFeatureData
member: GetInstanceIndex
returns: System.Int32
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
  - IDimPatternFeatureData.GetInstanceCount
keywords:
  - getinstanceindex
  - idimpatternfeaturedata
  - dim
  - pattern
  - feature
  - data
  - instance
  - index
  - name
  - string
  - int32
---

# IDimPatternFeatureData.GetInstanceIndex

Gets the index of the pattern instance in the FeatureManager design tree in the variable pattern feature.

## Signature

```csharp
System.Int32 GetInstanceIndex( 
   System.String
InstanceName
)
```
## Parameters

- `InstanceName` (System.String): Name of the pattern instance (see Remarks )

## Return Value

Index of InstanceName in the FeatureManager design tree

## Remarks

Use
IDimPatternFeatureData::GetInstanceNameByIndex
to get InstanceName.

## See Also

- `IDimPatternFeatureData.GetInstanceCount`