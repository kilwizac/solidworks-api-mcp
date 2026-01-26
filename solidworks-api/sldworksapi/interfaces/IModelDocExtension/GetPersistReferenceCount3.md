---
type: method
interface: IModelDocExtension
member: GetPersistReferenceCount3
returns: System.Int32
parameters:
  -
    name: DispObj
    type: System.Object
    description: Selected object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - persistent
  - reference
  - ids
  - number
  - objects
  - id
  - getpersistreferencecount3
  - imodeldocextension
  - model
  - doc
  - extension
  - persist
  - count3
  - disp
  - obj
  - object
  - int32
---

# IModelDocExtension.GetPersistReferenceCount3

Gets the size of the persistent reference ID assigned to the selected object in this model document.

## Signature

```csharp
System.Int32 GetPersistReferenceCount3( 
   System.Object
DispObj
)
```
## Parameters

- `DispObj` (System.Object): Selected object

## Return Value

Size of that object's persistent reference ID

## Remarks

Persistent reference ID values obtained using the now obsolete IModelDocExtension::GetPersistReference and its related obsolete methods, IModelDocExtension::GetPersistReferenceCount and IModelDocExtension::GetObjectByPersistReference2, are not compatible with persistent reference IDs obtained using
IModelDocExtension::GetPersistReference3
or
IModelDocExtension::IGetPersistReference3
and its related methods,
IModelDocExtension::GetObjectByPersistReference3
or
IModelDocExtension::IGetObjectByPersistReference3
and this method.
IMPORTANT:
SOLIDWORKS recommends not using this method with IModelDocExtension::IGetPersistReference3 because when these methods are used together, you will experience a significant decrease in performance.
See
Persistent Reference IDs
for more information.

## Examples

- Get Object's Persistent Reference ID (C++) (Get_Object_s_Persistent_Reference_ID_Example_CPlusPlus_COM.htm)