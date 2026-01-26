---
type: method
interface: ISafeArrayUtility
member: PutBstr
returns: void
parameters:
  -
    name: VariantArray
    type: System.Object
    description: Variant SafeArray of BSTRs
  -
    name: Index
    type: System.Int32
    description: Index of BSTR
  -
    name: Value
    type: System.String
    description: BSTR
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISafeArrayUtility.GetBstr
keywords:
  - putbstr
  - isafearrayutility
  - safe
  - array
  - utility
  - put
  - bstr
  - variant
  - object
  - index
  - int32
  - value
  - string
  - void
---

# ISafeArrayUtility.PutBstr

Adds the specified BSTR to a Variant SafeArray of BSTRs.

## Signature

```csharp
void PutBstr( 
   out System.Object
VariantArray
,
   System.Int32
Index
,
   System.String
Value
)
```
## Parameters

- `VariantArray` (System.Object): Variant SafeArray of BSTRs
- `Index` (System.Int32): Index of BSTR
- `Value` (System.String): BSTR

## Return Value

Unknown.

## Remarks

Be aware that calling ISafeArrayUtility::PutBstr within a loop that inserts a BSTR repeatedly declared on the stack results in an array of pointers to the same BSTR; i.e., all elements of the SafeArray are the same, which is most likely not your intention. For example, you should avoid using code similar to the following:
for (ULONG ulIndex = 0L; ulIndex < ulSize; ulIndex++)
{
CString testString;
testString.Format(_T('Index = %d'), ulIndex);
CComBSTR bstrTemp = testString;
HRESULT hres = iSAUtil->PutBstr(&vPacked, ulIndex, bstrTemp);
bstrArray[ulIndex] = bstrTemp;
}

## See Also

- `ISafeArrayUtility.GetBstr`