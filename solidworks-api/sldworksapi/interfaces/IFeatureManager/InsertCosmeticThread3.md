---
type: method
interface: IFeatureManager
member: InsertCosmeticThread3
returns: Feature
parameters:
  -
    name: Standard
    type: System.Int32
    description: Thread standard as defined by swCosmeticStandardType_e
  -
    name: StandardType
    type: System.String
    description: Thread type for Standard
  -
    name: Size
    type: System.String
    description: Thread size for the specified Standard
  -
    name: Diameter
    type: System.Double
    description: Thread diameter
  -
    name: EndType
    type: System.Int32
    description: End condition as defined by swCosmeticEndConditions_e
  -
    name: Depth
    type: System.Double
    description: Depth of the cosmetic thread; valid only for EndType = swCosmeticEndConditions_e.swEndConditionBlind or swCosmeticEndConditions_e.swEndConditionBlindUptoNext or swCosmeticEndConditions_e.swEndConditionBlind2Dia
  -
    name: Note
    type: System.String
    description: Callout text to display in the drawing document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData
keywords:
  - cosmetic
  - threads
  - see
  - also
  - icosmeticthreadfeaturedata
  - icthread
  - interfaces
  - insert
  - feature
  - ifeature
  - thread
  - insertcosmeticthread3
  - ifeaturemanager
  - manager
  - thread3
  - standard
  - int32
  - type
  - string
  - size
  - diameter
  - double
  - end
  - depth
  - note
  - traverse
  - all
  - vba
  - vb
  - net
---

# IFeatureManager.InsertCosmeticThread3

Inserts a cosmetic thread.

## Signature

```csharp
Feature InsertCosmeticThread3( 
   System.Int32
Standard
,
   System.String
StandardType
,
   System.String
Size
,
   System.Double
Diameter
,
   System.Int32
EndType
,
   System.Double
Depth
,
   System.String
Note
)
```
## Parameters

- `Standard` (System.Int32): Thread standard as defined by swCosmeticStandardType_e
- `StandardType` (System.String): Thread type for Standard
- `Size` (System.String): Thread size for the specified Standard
- `Diameter` (System.Double): Thread diameter
- `EndType` (System.Int32): End condition as defined by swCosmeticEndConditions_e
- `Depth` (System.Double): Depth of the cosmetic thread; valid only for EndType = swCosmeticEndConditions_e.swEndConditionBlind or swCosmeticEndConditions_e.swEndConditionBlindUptoNext or swCosmeticEndConditions_e.swEndConditionBlind2Dia
- `Note` (System.String): Callout text to display in the drawing document

## Return Value

IFeature

## Examples

- Traverse All Cosmetic Threads (VBA) (Traverse_All_Cosmetic_Threads_Example_VB.htm)
- Traverse All Cosmetic Threads (VB.NET) (Traverse_All_Cosmetic_Threads_Example_VBNET.htm)
- Traverse All Cosmetic Threads (C#) (Traverse_All_Cosmetic_Threads_Example_CSharp.htm)

## See Also

- `ICosmeticThreadFeatureData`