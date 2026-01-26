---
type: method
interface: IDimension
member: GetUserValueIn
returns: System.Double
parameters:
  -
    name: Doc
    type: System.Object
    description: Document whose units you want to use
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IDimension.GetSystemValue3
  - IDimension.GetValue3
  - IDimension.IGetSystemValue3
  - IDimension.IGetUserValueIn2
  - IDimension.IGetValue3
  - IDimension.ISetSystemValue3
  - IDimension.ISetUserValueIn3
  - IDimension.ISetValue3
  - IDimension.SetSystemValue3
  - IDimension.SetUserValueIn2
  - IDimension.SetValue3
keywords:
  - getuservaluein
  - idimension
  - dimension
  - user
  - value
  - doc
  - object
  - double
---

# IDimension.GetUserValueIn

Gets the value of this dimension in the units of the specified document.

## Signature

```csharp
System.Double GetUserValueIn( 
   System.Object
Doc
)
```
## Parameters

- `Doc` (System.Object): Document whose units you want to use

## Return Value

Value of this dimension in the units of the specified document, Doc

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.IGetValue3`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetUserValueIn3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue3`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`