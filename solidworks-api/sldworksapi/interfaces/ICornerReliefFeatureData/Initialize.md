---
type: method
interface: ICornerReliefFeatureData
member: Initialize
returns: System.Boolean
parameters:
  -
    name: CornerType
    type: System.Int32
    description: Corner relief bend type as defined by swCornerReliefBendType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICornerReliefFeatureData.CornerType
keywords:
  - initialize
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - type
  - int32
  - boolean
---

# ICornerReliefFeatureData.Initialize

Initializes this corner relief feature to have specified corner relief bend type.

## Signature

```csharp
System.Boolean Initialize( 
   System.Int32
CornerType
)
```
## Parameters

- `CornerType` (System.Int32): Corner relief bend type as defined by swCornerReliefBendType_e

## Return Value

True if the corner relief feature is initialized to the specified bend type, false if not

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)

## See Also

- `ICornerReliefFeatureData.CornerType`