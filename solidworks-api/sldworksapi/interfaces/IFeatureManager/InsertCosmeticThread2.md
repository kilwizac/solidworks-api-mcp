---
type: method
interface: IFeatureManager
member: InsertCosmeticThread2
returns: Feature
parameters:
  -
    name: Type
    type: System.Int16
    description: Type as defined in swCosmeticThreadType_e
  -
    name: Depth
    type: System.Double
    description: Diameter of the cosmetic thread
  -
    name: Length
    type: System.Double
    description: Length of the cosmetic thread
  -
    name: Note
    type: System.String
    description: Callout text to display in the drawing document
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData
keywords:
  - insertcosmeticthread2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - cosmetic
  - thread2
  - type
  - int16
  - depth
  - double
  - length
  - note
  - string
---

# IFeatureManager.InsertCosmeticThread2

Obsolete. Superseded by IFeatureManager::InsertCosmeticThread3.

## Signature

```csharp
Feature InsertCosmeticThread2( 
   System.Int16
Type
,
   System.Double
Depth
,
   System.Double
Length
,
   System.String
Note
)
```
## Parameters

- `Type` (System.Int16): Type as defined in swCosmeticThreadType_e
- `Depth` (System.Double): Diameter of the cosmetic thread
- `Length` (System.Double): Length of the cosmetic thread
- `Note` (System.String): Callout text to display in the drawing document

## Return Value

Pointer to the IFeature object

## See Also

- `ICosmeticThreadFeatureData`