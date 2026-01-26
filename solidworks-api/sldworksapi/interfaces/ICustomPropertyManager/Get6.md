---
type: method
interface: ICustomPropertyManager
member: Get6
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property
  -
    name: UseCached
    type: System.Boolean
    description: True if the configuration has been activated, false if not (see Remarks )
  -
    name: ValOut
    type: System.String
    description: Value of the custom property
  -
    name: ResolvedValOut
    type: System.String
    description: Evaluated value of the custom property
  -
    name: WasResolved
    type: System.Boolean
    description: True if the value was evaluated, false if not (see Remarks )
  -
    name: LinkToProperty
    type: System.Boolean
    description: True to link FieldName to its parent part, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.GetAll3
  - ICustomPropertyManager.GetNames
  - ICustomPropertyManager.GetType2
  - ICustomPropertyManager.Set2
keywords:
  - get6
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - use
  - cached
  - boolean
  - val
  - out
  - resolved
  - was
  - link
  - int32
---

# ICustomPropertyManager.Get6

Gets the value and the evaluated value of the specified custom property.

## Signature

```csharp
System.Int32 Get6( 
   System.String
FieldName
,
   System.Boolean
UseCached
,
   out System.String
ValOut
,
   out System.String
ResolvedValOut
,
   out System.Boolean
WasResolved
,
   out System.Boolean
LinkToProperty
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property
- `UseCached` (System.Boolean): True if the configuration has been activated, false if not (see Remarks )
- `ValOut` (System.String): Value of the custom property
- `ResolvedValOut` (System.String): Evaluated value of the custom property
- `WasResolved` (System.Boolean): True if the value was evaluated, false if not (see Remarks )
- `LinkToProperty` (System.Boolean): True to link FieldName to its parent part, false to not

## Return Value

Result code as defined in swCustomInfoGetResult_e

## Remarks

This method returns configuration-specific, linked, and evaluated custom-property data more quickly than the now obsolete ICustomPropertyManager::Get2, if the configuration is previously activated.
This method gets the cached custom property, even if its configuration is not currently active.
If UseCached is set to...
And the configuration has already been activated...
Then...
True
Yes
Up-to-date data is returned and WasResolved = true
True
No
Cached data is returned and WasResolved = false
False
Yes
Up-to-date data is returned and WasResolved = true
False
No
Up-to-date data is returned and WasResolved = true
If you always want up-to-date data, then you should set UseCached to false.
If the configuration is not previously activated, this method might take longer, as it loops through all of the model's configurations to find the specified custom property. When it finishes, the model might not be in its original configuration. To return the model to its original configuration, call
IModelDoc2::ForceRebuild3
after calling this method.
This method does not preface the resolved evaluated values of external referenced documents with fromparent+, unlike the now obsolete ICustomPropertyManager::Get3.

## Examples

- ICustomPropertyManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager)

## See Also

- `ICustomPropertyManager.GetAll3`
- `ICustomPropertyManager.GetNames`
- `ICustomPropertyManager.GetType2`
- `ICustomPropertyManager.Set2`