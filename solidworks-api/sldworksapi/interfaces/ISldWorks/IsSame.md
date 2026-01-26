---
type: method
interface: ISldWorks
member: IsSame
returns: System.Int32
parameters:
  -
    name: Object1
    type: System.Object
    description: Object
  -
    name: Object2
    type: System.Object
    description: Object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDocExtension.IsSamePersistentID
keywords:
  - objects
  - same
  - issame
  - isldworks
  - sld
  - works
  - object1
  - object
  - object2
  - int32
  - compare
  - selected
  - their
  - persistent
  - reference
  - ids
  - vb
  - net
  - vba
---

# ISldWorks.IsSame

Gets whether the two specified objects are the same object.

## Signature

```csharp
System.Int32 IsSame( 
   System.Object
Object1
,
   System.Object
Object2
)
```
## Parameters

- `Object1` (System.Object): Object
- `Object2` (System.Object): Object

## Return Value

Object equality as defined by swObjectEquality

## Examples

- Compare Selected Objects and Their Persistent Reference IDs (VB.NET) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VBNET.htm)
- Compare Selected Objects and Their Persistent Reference IDs (VBA) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_VB.htm)
- Compare Selected Objects and Their Persistent Reference IDs (C#) (Compare_Selected_Objects_and_Their_Persistent_Reference_IDs_Example_CSharp.htm)

## See Also

- `IModelDocExtension.IsSamePersistentID`